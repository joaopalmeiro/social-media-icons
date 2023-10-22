# https://github.com/googlefonts/picosvg/blob/v0.22.1/setup.py#L25
# https://github.com/googlefonts/picosvg/blob/v0.22.1/src/picosvg/picosvg.py#L74
# https://github.com/googlefonts/picosvg/blob/v0.22.1/src/picosvg/picosvg.py#L46
# https://stackoverflow.com/questions/50110800/python-pathlib-make-directories-if-they-don-t-exist
# https://github.com/googlefonts/picosvg/blob/v0.22.1/src/picosvg/svg.py#L1332

from pathlib import Path

from picosvg.svg import SVG

INPUT_PATH = Path("figma/icon")
# OUTPUT_PATH = Path("figma/icon")
OUTPUT_PATH = Path("picosvg")

# https://bjango.com/articles/svgpassthroughprecision/#figma
# https://bjango.com/articles/svgexports/
# https://bjango.com/articles/svgpassthroughprecision/#other-tests
# Figma:
# SVG_EXPORT_PRECISION = 5
# Maximum value found:
SVG_EXPORT_PRECISION = 10

if __name__ == "__main__":
    OUTPUT_PATH.mkdir(parents=True, exist_ok=True)

    for icon_path in INPUT_PATH.glob("*.svg"):
        icon = SVG.parse(icon_path)

        processed_icon = icon.topicosvg(
            ndigits=SVG_EXPORT_PRECISION, allow_text=False, drop_unsupported=False
        )

        output_icon = processed_icon.tostring(pretty_print=True)

        with open(OUTPUT_PATH / icon_path.name, "w") as f:
            f.write(output_icon)

        print(f"{icon_path} ✓")
