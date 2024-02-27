export default function Button(props) {
   const { color, setColor } = props;
   return (
      <button
         onClick={() => setColor(color)}
         className="outline-none px-3 py-2 rounded-2xl "
         style={{ background: color }}
      >
         {color}
      </button>
   );
}
