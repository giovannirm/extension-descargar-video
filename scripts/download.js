function download_video(){
    url = document.getElementsByTagName("video")[0].currentSrc
    tag_a = document.createElement("a")
    tag_a.setAttribute("href", url)
    tag_a.setAttribute("target", "_blank")
    tag_a.setAttribute("id", `video-${url}`)
    tag_a.click()
}

setTimeout(download_video, 5000)