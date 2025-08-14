const fs = require('fs');
const path = require('path');

console.log('🎨 Generando lista completa de iconos por categorías...\n');

const iconsDir = path.resolve(__dirname, '../src/icons');
const categories = fs.readdirSync(iconsDir).filter(item => 
  fs.statSync(path.join(iconsDir, item)).isDirectory() && item !== 'svg'
);

let totalIcons = 0;
let categoryList = [];

// Procesar cada categoría
categories.forEach(category => {
  const categoryPath = path.join(iconsDir, category);
  const styles = fs.readdirSync(categoryPath).filter(item => 
    fs.statSync(path.join(categoryPath, item)).isDirectory()
  );
  
  let categoryIcons = [];
  
  // Procesar cada estilo (Light, Regular, Filled, etc.)
  styles.forEach(style => {
    const stylePath = path.join(categoryPath, style);
    const iconFiles = fs.readdirSync(stylePath)
      .filter(file => file.endsWith('.tsx') && file !== 'index.ts')
      .map(file => file.replace('.tsx', ''));
    
    categoryIcons.push(...iconFiles);
  });
  
  // Remover duplicados (mismo icono en diferentes estilos)
  const uniqueIcons = [...new Set(categoryIcons)].sort();
  
  categoryList.push({
    name: category,
    count: uniqueIcons.length,
    icons: uniqueIcons
  });
  
  totalIcons += uniqueIcons.length;
});

// Ordenar categorías por número de iconos (descendente)
categoryList.sort((a, b) => b.count - a.count);

// Generar el reporte
let report = `# 📋 Lista Completa de Iconos - @opendex-origon/icons v2.9.2\n\n`;
report += `**Total de iconos únicos:** ${totalIcons}\n`;
report += `**Total de categorías:** ${categoryList.length}\n\n`;

report += `## 📊 Resumen por Categorías\n\n`;
report += `| Categoría | Cantidad |\n`;
report += `|-----------|----------|\n`;

categoryList.forEach(cat => {
  report += `| ${cat.name} | ${cat.count} |\n`;
});

report += `\n## 🎨 Detalle por Categoría\n\n`;

categoryList.forEach(cat => {
  report += `### ${cat.name} (${cat.count} iconos)\n\n`;
  
  // Agrupar iconos en columnas de 4
  const columns = 4;
  for (let i = 0; i < cat.icons.length; i += columns) {
    const row = cat.icons.slice(i, i + columns);
    report += `- ${row.join(' • ')}\n`;
  }
  
  report += `\n`;
});

// Guardar el reporte
const reportPath = path.resolve(__dirname, '../ICON_LIST.md');
fs.writeFileSync(reportPath, report);

console.log('✅ Lista de iconos generada exitosamente!');
console.log(`📁 Archivo guardado en: ${reportPath}`);
console.log(`📊 Total de iconos únicos: ${totalIcons}`);
console.log(`📂 Total de categorías: ${categoryList.length}`);

// Mostrar resumen en consola
console.log('\n📋 Resumen por categorías:');
categoryList.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.count} iconos`);
});
