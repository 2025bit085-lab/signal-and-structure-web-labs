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

export async function slide01(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";

  slide.shapes.add({
    geometry: "rect",
    position: { left: 40, top: 40, width: WIDTH - 80, height: HEIGHT - 80 },
    fill: "#FFFFFF",
    line: { width: 1, fill: "#CFCFCF" },
  });

  box(slide, "Project Title", {
    left: 90,
    top: 90,
    width: 250,
    height: 40,
  }, {
    typeface: "Times New Roman",
    fontSize: 28,
    bold: true,
  });

  box(slide, "Pearl Trails Uganda Tourism Website", {
    left: 90,
    top: 150,
    width: 900,
    height: 50,
  }, {
    fontSize: 26,
    bold: true,
  });

  box(slide, "Team Composition", {
    left: 90,
    top: 260,
    width: 300,
    height: 34,
  }, {
    typeface: "Times New Roman",
    fontSize: 24,
    bold: true,
  });

  box(slide, "Add names of group members here.", {
    left: 90,
    top: 310,
    width: 520,
    height: 28,
  }, {
    fontSize: 20,
  });

  [0, 1, 2].forEach((n) => {
    slide.shapes.add({
      geometry: "line",
      position: { left: 90, top: 370 + n * 40, width: 420, height: 0 },
      line: { width: 1, fill: "#000000" },
    });
  });

  box(slide, "Course Work Presentation", {
    left: 90,
    top: 585,
    width: 320,
    height: 26,
  }, {
    fontSize: 18,
  });

  return slide;
}
