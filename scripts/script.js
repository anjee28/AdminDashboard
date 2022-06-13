const upload = document.getElementById('upload');
const project = document.getElementById('project');
const projectContainer = document.querySelector('#project');

const input = {
    title: 'Project Title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium perferendis eveniet sequi ipsa eos illum animi, odio possimus unde aliquam iste eum, eligendi, quo commodi ut dolor exercitationem voluptatum?'
};

upload.addEventListener('click', () => {
    const newInput = document.createElement('div');
    newInput.classList.add('input');
    projectContainer.appendChild(newInput);
    
    const newInputHead = document.createElement('div');
    newInputHead.classList.add('head');
    newInputHead.innerHTML= "<p>" + input.title + "</p>";
    newInput.appendChild(newInputHead);

    const newInputBody = document.createElement('div');
    newInputBody.classList.add('body');
    newInputBody.innerHTML= "<p>" + input.body + "</p>";
    newInput.appendChild(newInputBody);
})