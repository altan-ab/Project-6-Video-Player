function Menu({ onVideoChange, selectedVideo }) {
  return (
    <div className="menu">
      <label>
        <input
          type="radio"
          value="geyik"
          checked={selectedVideo === 'geyik'}
          onChange={(e) => onVideoChange(e.target.value)}
        />
        Geyik
      </label>

      <label>
        <input
          type="radio"
          value="salyangoz"
          checked={selectedVideo === 'salyangoz'}
          onChange={(e) => onVideoChange(e.target.value)}
        />
        Salyangoz
      </label>

      <label>
        <input
          type="radio"
          value="kedi"
          checked={selectedVideo === 'kedi'}
          onChange={(e) => onVideoChange(e.target.value)}
        />
        Kedi
      </label>

      <label>
        <input
          type="radio"
          value="orumcek"
          checked={selectedVideo === 'orumcek'}
          onChange={(e) => onVideoChange(e.target.value)}
        />
        Örümcek
      </label>
    </div>
  )
}

export default Menu
