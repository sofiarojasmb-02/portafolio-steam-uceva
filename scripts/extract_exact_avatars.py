import fitz # PyMuPDF
import os
from PIL import Image

doc = fitz.open('Centro STEAM.pdf')
output_dir = 'assets/team'
os.makedirs(output_dir, exist_ok=True)

# Each page definition with columns (left to right)
slides_config = [
    {
        "page_num": 2, # Slide 3: Profesionales
        "slide_name": "profesionales",
        "members": [
            {"name": "Juan Sebastián Correa Fernández", "role": "Coordinador del Centro STEAM / Prototipado", "file": "juan_sebastian_correa.jpg"},
            {"name": "Juan David Villegas Tamayo", "role": "Experto STEM+", "file": "juan_david_villegas.jpg"},
            {"name": "Ingrid Tatiana Bocanegra García", "role": "Experta en Vocaciones Científicas", "file": "ingrid_tatiana_bocanegra.jpg"},
            {"name": "David Tenorio Cruz", "role": "Experto en Fabricación & Prototipado", "file": "david_tenorio_cruz.jpg"},
            {"name": "Alberto José Duque", "role": "Especialista en IA & Modelos AA", "file": "alberto_jose_duque.jpg"},
            {"name": "David G. Bustamante Herrera", "role": "Especialista en Inteligencia Artificial", "file": "david_bustamante_herrera.jpg"}
        ]
    },
    {
        "page_num": 3, # Slide 4: Apoyo 1
        "slide_name": "apoyo_1",
        "members": [
            {"name": "Georleans González Marmolejo", "role": "Monitor Centro STEAM (UX/UI / Electrónica)", "file": "georleans_gonzalez.jpg"},
            {"name": "Michael Andrés Hernández", "role": "Desarrollador VR/AR/MR", "file": "michael_andres_hernandez.jpg"},
            {"name": "Alejandro Burbano Vivas", "role": "Estudiante Practicante VR/AR/MR", "file": "alejandro_burbano.jpg"},
            {"name": "María Camila Tigreros Sánchez", "role": "Comunicación & Media", "file": "maria_camila_tigreros.jpg"},
            {"name": "Valery Gabriela Guerrero Macías", "role": "Comunicación & Media", "file": "valery_gabriela_guerrero.jpg"},
            {"name": "Ana Sofía Guzmán Díaz", "role": "Comunicación & Media", "file": "ana_sofia_guzman.jpg"}
        ]
    },
    {
        "page_num": 4, # Slide 5: Apoyo 2
        "slide_name": "apoyo_2",
        "members": [
            {"name": "Lidier Felipe Sicacha Granado", "role": "Estudiante Practicante Software/XR", "file": "lidier_felipe_sicacha.jpg"},
            {"name": "Eliana López Franco", "role": "Estudiante Monitora Electrónica", "file": "eliana_lopez_franco.jpg"},
            {"name": "Samuel Lozano Vásquez", "role": "Estudiante Voluntario", "file": "samuel_lozano_vasquez.jpg"},
            {"name": "Miguel Ángel Peláez Valencia", "role": "Estudiante Voluntario", "file": "miguel_angel_pelaez.jpg"},
            {"name": "Luisa Fernanda Madrigal Suárez", "role": "Comunicación & Media", "file": "luisa_fernanda_madrigal.jpg"},
            {"name": "Kelly Johanna Arboleda Grueso", "role": "Científica Voluntaria", "file": "kelly_johanna_arboleda.jpg"}
        ]
    }
]

# High-resolution rendering scale
zoom = 4 # 4x zoom for ultra crisp avatars
mat = fitz.Matrix(zoom, zoom)

for config in slides_config:
    page = doc[config["page_num"]]
    pix = page.get_pixmap(matrix=mat)
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    
    W, H = img.size
    print(f"\nProcessing Slide {config['page_num']+1} ({config['slide_name']}) - Render size: {W}x{H}")
    
    # In the presentation, the 6 photo avatars are positioned in a horizontal row across the width
    # In 792 pt width page, the 6 columns are approx:
    # Col 1: X in [20, 145] -> center ~ 82 pt
    # Col 2: X in [150, 275] -> center ~ 212 pt
    # Col 3: X in [280, 405] -> center ~ 342 pt
    # Col 4: X in [410, 535] -> center ~ 472 pt
    # Col 5: X in [540, 665] -> center ~ 602 pt
    # Col 6: X in [670, 790] -> center ~ 730 pt
    # Y range for portraits is approx Y in [210, 365] pt (above text which is at Y in [385, 430] pt)
    
    col_centers_pt = [82.5, 212.5, 342.5, 472.5, 602.5, 730.0]
    col_width_pt = 125.0
    y_top_pt = 205.0
    y_bottom_pt = 370.0
    
    for idx, member in enumerate(config["members"]):
        center_x_pt = col_centers_pt[idx]
        x0_pt = max(0, center_x_pt - col_width_pt / 2)
        x1_pt = min(792, center_x_pt + col_width_pt / 2)
        
        # Convert to pixel coordinates
        px0 = int(x0_pt * zoom)
        py0 = int(y_top_pt * zoom)
        px1 = int(x1_pt * zoom)
        py1 = int(y_bottom_pt * zoom)
        
        crop_img = img.crop((px0, py0, px1, py1))
        dest_path = os.path.join(output_dir, member["file"])
        crop_img.save(dest_path, "JPEG", quality=95)
        print(f"  [Col {idx+1}] Cropped avatar for '{member['name']}' -> {dest_path} (size: {crop_img.size})")

print("\nAll avatars accurately extracted and mapped!")
