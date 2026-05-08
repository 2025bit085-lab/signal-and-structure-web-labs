const WIDTH = 1280;
const HEIGHT = 720;
const COLORS = {
  background: "#f7f4ee",
  paper: "#fffdfa",
  ink: "#111111",
  muted: "#5f5a52",
  accent: "#835c34",
  line: "#d8d0c3",
  soft: "#efe7d9",
};

function addShell(slide) {
  slide.background.fill = COLORS.background;

  slide.shapes.add({
    geometry: "rect",
    position: { left: 34, top: 30, width: WIDTH - 68, height: HEIGHT - 60 },
    fill: COLORS.paper,
    line: { width: 1.2, fill: COLORS.line },
  });

  slide.shapes.add({
    geometry: "rect",
    position: { left: 68, top: 92, width: 130, height: 6 },
    fill: COLORS.accent,
    line: { width: 0, fill: COLORS.accent },
  });
}

function addTextBox(slide, text, position, options = {}) {
  const box = slide.shapes.add({
    geometry: "rect",
    position,
    fill: options.fill ?? COLORS.paper,
    line: options.line ?? { width: 0, fill: COLORS.paper },
  });
  box.text = text;
  box.text.typeface = options.typeface ?? "Aptos";
  box.text.fontSize = options.fontSize ?? 24;
  box.text.bold = options.bold ?? false;
  box.text.color = options.color ?? COLORS.ink;
  box.text.alignment = options.alignment ?? "left";
  box.text.verticalAlignment = options.verticalAlignment ?? "top";
  box.text.insets = options.insets ?? { left: 4, right: 4, top: 2, bottom: 2 };
  return box;
}

export async function slide01(presentation) {
  const slide = presentation.slides.add();
  addShell(slide);

  addTextBox(slide, "Web Design Project Presentation", {
    left: 68,
    top: 112,
    width: 1140,
    height: 42,
  }, {
    typeface: "Georgia",
    fontSize: 22,
    bold: true,
    color: COLORS.accent,
  });

  addTextBox(slide, "Signal & Structure: A Progressive Web Practice Site", {
    left: 68,
    top: 164,
    width: 1030,
    height: 116,
  }, {
    typeface: "Georgia",
    fontSize: 31,
    bold: true,
    color: COLORS.ink,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  addTextBox(slide, "A concise group project showcase built from the six lab activities.", {
    left: 70,
    top: 286,
    width: 860,
    height: 40,
  }, {
    fontSize: 20,
    color: COLORS.muted,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  slide.shapes.add({
    geometry: "roundRect",
    position: { left: 68, top: 382, width: 1140, height: 208 },
    fill: COLORS.soft,
    line: { width: 1, fill: COLORS.line },
  });

  addTextBox(slide, "Team Composition", {
    left: 96,
    top: 412,
    width: 350,
    height: 36,
  }, {
    typeface: "Georgia",
    fontSize: 24,
    bold: true,
  });

  addTextBox(slide, "Add member names, registration numbers, and roles here.", {
    left: 96,
    top: 456,
    width: 540,
    height: 34,
  }, {
    fontSize: 18,
    color: COLORS.muted,
  });

  [0, 1, 2].forEach((index) => {
    slide.shapes.add({
      geometry: "line",
      position: { left: 96, top: 518 + index * 28, width: 480, height: 0 },
      line: { width: 1.2, fill: "#81776b" },
    });
  });

  addTextBox(slide, "Course Context", {
    left: 748,
    top: 412,
    width: 260,
    height: 34,
  }, {
    typeface: "Georgia",
    fontSize: 22,
    bold: true,
  });

  addTextBox(slide, "Foundational web design practice covering page structure, links, media, data layout, semantic HTML, and forms.", {
    left: 748,
    top: 456,
    width: 390,
    height: 112,
  }, {
    fontSize: 18,
    color: COLORS.ink,
  });

  addTextBox(slide, "Prepared for classroom presentation", {
    left: 68,
    top: 633,
    width: 360,
    height: 24,
  }, {
    fontSize: 15,
    color: COLORS.muted,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  return slide;
}
