function Video({ selectedVideo }) {
  const videoSources = {
    geyik: 'https://www.youtube.com/embed/jqUDipMoMu0',
    salyangoz: 'https://www.youtube.com/embed/6gYtvqfsKwY',
    kedi: 'https://www.youtube.com/embed/VO89weyBK0k',
    orumcek: 'https://www.youtube.com/embed/NRLDWpek1UM',
  }

  return (
    <div className="video-container">
      <iframe
        width="600"
        height="400"
        src={videoSources[selectedVideo]}
        title="Selected Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video

/*  
<video> etiketi genellikle MP4 gibi yerel dosyaları veya doğrudan oynatılabilir video formatlarını destekler!! 
 <video width="600" controls>
        <source src={videoSources[selectedVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
Bu yüzden denemeler çalışmadı. 
*/

/* 
GEYIK
<iframe width="824" height="464" 
src="https://www.youtube.com/embed/jqUDipMoMu0" title="geyik videoları - çocuklar için hayvan videoları" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

SALYANGOZ
<iframe width="824" height="464" 
src="https://www.youtube.com/embed/6gYtvqfsKwY" 
title="1 Dakikalık Salyangoz Belgeseli :)" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

KEDI 
<iframe width="824" height="464" 
src="https://www.youtube.com/embed/VO89weyBK0k" 
title="En Sevimli Yavru Kediler - Küçük Kediler - Yavru Kedi Videoları" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ORUMCEK
<iframe width="824" height="464" 
src="https://www.youtube.com/embed/NRLDWpek1UM" title="KARTAL GÖZLÜ ZEKİ ÖRÜMCEK PORTIA&#39;NIN AVLANMA TEKNİKLERİ | 4K HAYVAN BELGESELİ" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

*/
