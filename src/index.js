import '../assets/css/style.css'

const app = document.getElementById('app')
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>
<div class="uploader" draggable>
  <h2>Upload your files</h2>
  <p>Accepts only .png, .jpg, .svg</p>
  <div class="dropzone">Drag to Upload</div>
  <div class="list"></div>
</div>

<style>
.uploader {
    box-sizing: border-box;
    max-width: 90%;
    border-radius: 10px;
    border-bottom: 3px solid #d2d5dd;
    margin: 25px auto;
    padding: 25px;
    background: #fff;
}
.dropzone {
    border-radius: 5px;
    margin-top: 25px;
    padding: 25px;
    border: 2px dashed #d2d2dd;
    background: #f1f2f5;
}
.active{
    background: #ebffff;
    border-color: #24b373;
}
<style/>
`

const init = () => {
  const dropzone = document.querySelector('.dropzone')
  const list = document.querySelector('.list')

  dropzone.addEventListener('dragenter', (e) =>
    e.target.classList.add('active')
  )

  dropzone.addEventListener('dragleave', (e) =>
    e.target.classList.remove('active')
  )

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  })

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.remove('active')
    const { files } = e.dataTransfer
    handleFileUpload(files)
  })

  const showFilePreview = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', (e) => {
      const div = document.createElement('div')
      div.innerHTML = `
      <div style="display: flex">
        <img
          src="${e.target.result}"
          alt="${file.name}"
          style="width: 120px; margin: 5px">
          <p>${file.name} <span>${file.size} bytes</span></p>
      </div>`
      list.append(div)
    })
  }

  const uploadFiles = async (files) => {
    const form = new FormData()

    ;[...files].forEach((file) => form.append(file.name, file))

    const request = await fetch('//dragdropfiles.glitch.me/upload', {
      method: 'POST',
      body: form,
    })

    return await request.json()
  }

  const isAllowedType = (file) => {
    return ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type)
  }

  const handleFileUpload = async (files) => {
    const filesToUpload = [...files].filter(isAllowedType)

    filesToUpload.forEach(showFilePreview)

    const uploaded = await uploadFiles(filesToUpload)

    if (uploaded) {
      console.log(uploaded)
    }
  }

  document.addEventListener('dragover', (e) => e.preventDefault())
  document.addEventListener('drop', (e) => e.preventDefault())
}

if ('draggable' in document.createElement('div')) {
  init()
}
