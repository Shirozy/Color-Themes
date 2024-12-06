import colorsys

color: str = "#3498db"

def hex_to_rgb(hex_color: str) -> tuple[int, int, int]:
    """Convert a hexadecimal color string to an RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb: tuple[int, int, int]) -> str:
    """Convert an RGB tuple to a hexadecimal color string."""
    return f"#{''.join(f'{value:02x}' for value in rgb)}"

def rgb_to_hsl(rgb: tuple[int, int, int]) -> tuple[int, int, int]:
    """Convert an RGB tuple to an HSL tuple."""
    r, g, b = [x / 255.0 for x in rgb]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    return round(h * 360), round(s * 100), round(l * 100)

def hsl_to_rgb(hsl: tuple[int, int, int]) -> tuple[int, int, int]:
    """Convert an HSL tuple to an RGB tuple."""
    h, s, l = hsl
    r, g, b = colorsys.hls_to_rgb(h / 360, l / 100, s / 100)
    return round(r * 255), round(g * 255), round(b * 255)

if __name__ == "__main__":
    hex_color: str = color
    rgb: tuple[int, int, int] = hex_to_rgb(hex_color)
    hsl: tuple[int, int, int] = rgb_to_hsl(rgb)
    
    print(f"HEX: {hex_color}")
    print(f"RGB: {rgb}")
    print(f"HSL: {hsl}")
    print(f"Converted back to HEX: {rgb_to_hex(rgb)}")

