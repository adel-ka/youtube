import React from 'react'

const VideoList = () => {
    const list=[
        {name:"مسلسل شوفلي حل - الموسم 2006 - الحلقة الواحدة والعشرون",vid:"https://www.youtube.com/embed/mzm0-V-tVs0?si=2fQCml0aD8FkGzXI"},
        {name:"مسلسل شوفلي حل - الموسم 2006 - الحلقة الثانية والعشرون",vid:"https://youtu.be/Ffac-sY22o8?si=x09wsafBBSWTUo42"},
        {name:"مسلسل شوفلي حل - الموسم 2006 - الحلقة الثالثة والعشرون", vid:"https://www.youtube.com/embed/7FMTUJA73jo?si=9_4vQWhzz5Vf21Tg"},

    ]
  return (
    <div className='list' >
        {
            list.map(video=><div className='vid'>
            <iframe
                width="300"
                // height="383"
                src={video.vid}
            
                title={video.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
               <h5>{video.name}</h5>
            </div>
               )

        } 
    </div>
  )
}

export default VideoList