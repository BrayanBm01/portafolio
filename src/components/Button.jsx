
export const Button = ({ texto, href = "#", color = "bg-purple-600", textoColor = "text-white" }) => (
  <a href={href} className={`${color} ${textoColor} px-5 py-2 rounded hover:opacity-90 transition font-semibold`}>
    {texto}
  </a>
);
