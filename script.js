//find the element
//change the style
//change the content
//add event action


function getColorChange(){
    let button = document.querySelector(".btn")
    let container = document.querySelector(".container")
    let colors = [
        "#fce4ec", "#f8bbd0", "#e1bee7", "#d1c4e9", "#c5cae9", "#bbdefb", 
        "#b3e5fc", "#b2ebf2", "#b2dfdb", "#c8e6c9", "#dcedc8", "#f0f4c3", 
        "#fff9c4", "#ffecb3", "#ffe0b2", "#ffccbc", "#d7ccc8", "#f5f5f5", 
        "#cfd8dc", "#e6ee9c", "#80deea", "#ffcc80", "#d1c4e9", "#81c784", 
        "#c5e1a5", "#ffab91", "#fff59d", "#aed581", "#ffe082", "#b39ddb"
      ];
      const color = Math.round(Math.random() * 30);
      container.style.backgroundColor = colors[color];
}
