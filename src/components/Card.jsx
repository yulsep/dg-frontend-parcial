export default function Card({ information }) {
  return (
    <div className="card">
      <h2>
        Hola <span>{information.firstName}</span>
      </h2>
      <p>
        Tu email es <span>{information.email}</span>
      </p>
      <p>
        Tu música favorita es <span>{information.music}</span>
      </p>
      <p>
        Tu artista favorito es <span>{information.artist}</span>
      </p>
    </div>
  );
}
