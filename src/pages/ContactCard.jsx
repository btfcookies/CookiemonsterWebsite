export default function ContactCard(props) {
  const {name, icon, username} = props;

  return(
    <div className="card">
      <img src={icon} alt="Image" />
      <h1>{name}</h1>
      <h2>{username}</h2>
    </div>
  )

}