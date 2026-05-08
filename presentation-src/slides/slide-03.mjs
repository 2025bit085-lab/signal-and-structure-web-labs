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

export async function slide03(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";

  slide.shapes.add({
    geometry: "rect",
    position: { left: 40, top: 40, width: WIDTH - 80, height: HEIGHT - 80 },
    fill: "#FFFFFF",
    line: { width: 1, fill: "#CFCFCF" },
  });

  box(slide, "Project Site Link", {
    left: 90,
    top: 90,
    width: 320,
    height: 40,
  }, {
    typeface: "Times New Roman",
    fontSize: 28,
    bold: true,
  });

  box(slide, "GitHub Pages:", {
    left: 90,
    top: 180,
    width: 220,
    height: 30,
  }, {
    typeface: "Times New Roman",
    fontSize: 24,
    bold: true,
  });

  box(slide, "https://2025bit085-lab.github.io/signal-and-structure-web-labs/", {
    left: 90,
    top: 230,
    width: 1080,
    height: 40,
  }, {
    fontSize: 22,
  });

  box(slide, "GitHub Repository:", {
    left: 90,
    top: 340,
    width: 260,
    height: 30,
  }, {
    typeface: "Times New Roman",
    fontSize: 24,
    bold: true,
  });

  box(slide, "https://github.com/2025bit085-lab/signal-and-structure-web-labs", {
    left: 90,
    top: 390,
    width: 1080,
    height: 40,
  }, {
    fontSize: 22,
  });

  box(slide, "This link shows the hosted work and the version-controlled files.", {
    left: 90,
    top: 510,
    width: 780,
    height: 30,
  }, {
    fontSize: 21,
  });

  return slide;
}
