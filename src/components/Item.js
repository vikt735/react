import 'bootstrap/dist/css/bootstrap.min.css';


export function Item({title, num, desr, notation}) {
  return (
    <div className="item">
      <p className="fz">{title}</p>
      <p className="fz-3">{num}<span className="fz"> {notation}</span></p>
      <p className="fz-1 mb-4 Red">{desr}</p>
    </div>
  )
};