const encodeSvg = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

export const createProductGraphic = ({ title, colorA = '#111827', colorB = '#6366f1', accent = '#eef2ff' }) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
      <defs>
        <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='${colorA}'/>
          <stop offset='100%' stop-color='${colorB}'/>
        </linearGradient>
      </defs>
      <rect width='800' height='600' rx='36' fill='url(#bg)'/>
      <circle cx='156' cy='118' r='72' fill='rgba(255,255,255,0.18)'/>
      <circle cx='680' cy='462' r='110' fill='rgba(255,255,255,0.1)'/>
      <rect x='220' y='160' width='360' height='220' rx='26' fill='rgba(255,255,255,0.12)'/>
      <rect x='330' y='210' width='140' height='120' rx='20' fill='${accent}' opacity='0.9'/>
      <rect x='355' y='195' width='90' height='30' rx='8' fill='rgba(255,255,255,0.45)'/>
      <rect x='290' y='358' width='220' height='24' rx='12' fill='rgba(255,255,255,0.35)'/>
      <text x='400' y='450' text-anchor='middle' fill='white' font-size='44' font-family='Arial, sans-serif' font-weight='700'>${title}</text>
    </svg>
  `;

  return encodeSvg(svg);
};

export const productPlaceholder = createProductGraphic({ title: 'Shop', colorA: '#111827', colorB: '#6366f1' });
