const WIDTH = 1280;
const HEIGHT = 720;

function box(slide, text, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "rect",
    position,
    fill: options.fill ?? "#FFFFFF",
    line: options.line ?? { width: 0, fill: "#FFFFFF" },
  });
  shape.text = text;
  shape.text.typeface = options.typeface ?? "Arial";
  shape.text.fontSize = options.fontSize ?? 22;
  shape.text.bold = options.bold ?? false;
  shape.text.color = options.color ?? "#000000";
  shape.text.insets = options.insets ?? { left: 0, right: 0, top: 0, bottom: 0 };
  return shape;
}

export async function slide02(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";

  slide.shapes.add({
    geometry: "rect",
    position: { left: 40, top: 40, width: WIDTH - 80, height: HEIGHT - 80 },
    fill: "#FFFFFF",
    line: { width: 1, fill: "#CFCFCF" },
  });

  box(slide, "Project Aim", {
    left: 90,
    top: 90,
    width: 250,
    height: 40,
  }, {
    typeface: "Times New Roman",
    fontSize: 28,
    bold: true,
  });

  box(slide, "To make a simple tourism website that helps users access information, see where current tourism services are lacking, and get easier support for planning and booking.", {
    left: 90,
    top: 160,
    width: 1030,
    height: 130,
  }, {
    fontSize: 24,
  });

  box(slide, "Where we are lacking:", {
    left: 90,
    top: 330,
    width: 280,
    height: 30,
  }, {
    typeface: "Times New Roman",
    fontSize: 24,
    bold: true,
  });

  const items = [
    "Tourism information is not always found in one place.",
    "Trusted booking details may be hard for visitors to identify.",
    "Smaller tourism services may have low online visibility.",
  ];

  items.forEach((item, index) => {
    box(slide, `- ${item}`, {
      left: 110,
      top: 390 + index * 60,
      width: 980,
      height: 32,
    }, {
      fontSize: 21,
    });
  });

  return slide;
}
