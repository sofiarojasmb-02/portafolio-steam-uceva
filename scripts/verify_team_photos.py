import fitz
import os

doc = fitz.open('Centro STEAM.pdf')
os.makedirs('assets/team_verified', exist_ok=True)

for p_num in [2, 3, 4]:
    page = doc[p_num]
    slide_no = p_num + 1
    print(f"\n===================== SLIDE {slide_no} =====================")
    
    # Text blocks
    raw_blocks = page.get_text("blocks")
    # Filter out page title
    blocks = [b for b in raw_blocks if "EQUIPO" not in b[4] and b[4].strip()]
    # Group text blocks by column/X position
    # Sort blocks left to right
    blocks.sort(key=lambda b: b[0])
    
    # Images
    img_list = []
    for img_info in page.get_images():
        xref = img_info[0]
        rects = page.get_image_rects(xref)
        for r in rects:
            # Check if this is a person portrait (not full slide background, not full header)
            w = r.x1 - r.x0
            h = r.y1 - r.y0
            if r.y0 > 180 and r.y1 < 380 and w < 280:
                img_list.append({
                    "xref": xref,
                    "rect": r,
                    "x0": r.x0,
                    "x1": r.x1,
                    "y0": r.y0,
                    "y1": r.y1
                })
                
    # Sort images left to right
    img_list.sort(key=lambda item: item["x0"])
    
    print(f"--- Extracted {len(img_list)} portrait images (ordered Left -> Right) ---")
    for i, item in enumerate(img_list):
        xref = item["xref"]
        pix = fitz.Pixmap(doc, xref)
        if pix.n >= 5:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        filename = f"assets/team_verified/slide_{slide_no}_pos_{i+1}.jpg"
        pix.save(filename)
        print(f"  [Pos {i+1}] (X: {item['x0']:.1f} to {item['x1']:.1f}) -> Saved to {filename}")
        
    print("\n--- Text blocks (ordered Left -> Right) ---")
    for b in blocks:
        lines = [line.strip() for line in b[4].strip().split("\n") if line.strip()]
        print(f"  (X: {b[0]:.1f} to {b[2]:.1f}) -> {' | '.join(lines)}")
