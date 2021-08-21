var chart;
window.onload = function () {
    chart = new OrgChart(document.getElementById("orgchart"), {
        template: "olivia",
        layout: OrgChart.mixed,
        // mouseScrool: OrgChart.none,
        menu: {
            pdfPreview: { 
                text: "PDF Preview", 
                icon: OrgChart.icon.pdf(24,24, '#7A7A7A'),
                onClick: preview
            },
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
        },
        nodeMenu: {
          details: { text: "Details" },
          edit: { text: "Edit" },
          add: { text: "Add" },
          remove: { text: "Remove" }
        },   
        nodeBinding: {
            field_0: "Name",
            img_0: "img"
        }
    });

    chart.on('init', function(){
        preview();
    })

    chart.load([
            { id: "1", Name: "Parent's Name", email: "Update your Email Here", birthday: "Enter Birthday Here", address: "Enter Address Here", img: "static/profile_pics/logo.jpg" },
            { id: "2", pid: "1", Name: "", email: "Update your Email Here", birthday: "Enter Birthday Here", address: "Enter Address Here", img: "static/profile_pics/logo.jpg" },
            { id: "3", pid: "1", Name: "", email: "Update your Email Here", birthday: "Enter Birthday Here", address: "Enter Address Here", img: "static/profile_pics/logo.jpg" },
            { id: "4", pid: "1", Name: "", email: "Update your Email Here", birthday: "Enter Birthday Here", address: "Enter Address Here", img: "static/profile_pics/logo.jpg" },
            { id: "5", pid: "2", Name: "", email: "Update your Email Here", birthday: "Enter Birthday Here", address: "Enter Address Here", img: "static/profile_pics/logo.jpg" }
        ]);

    function preview(){
        OrgChart.pdfPrevUI.show(chart, {
            format: 'A4'
        });
    }
};



// // THIRD PLOT
// //////////////////////////////////////////////////////////////////////////////

// let Ids = [];
// let Names = [];
// let Pids = [];
// //  let PPids = [];
// // let Tags = [];
// let Img = [];


// const addProfile = (ev)=> {
//   ev.preventDefault();

//     var name = document.getElementById('name').value;
//     var id = document.getElementById('id').value;
//     var pid = document.getElementById('pid').value;
//     // var ppid = document.getElementById('ppid').value;
//     // var Tag = document.getElementById('tags').value;
//     var profile_img = "static/profile_pics/" + document.getElementById('profile_img').value + ".jpg";
  
//   Ids.push(id);
//   Names.push(name);
//   Pids.push(pid);
//   //  PPids.push(ppid);
//   // Tags.push(Tag);
//   Img.push(profile_img);
//   document.forms[0].reset();

//   // console.warn('added', {items});
//   // let pre = document.querySelector('#msg pre');
//   // pre.textContent = '\n' + JSON.stringify(items, '\t',2);

//   localStorage.setItem('Ids',JSON.stringify({Ids}));
//   localStorage.setItem('Names',JSON.stringify({Names}));
//   localStorage.setItem('Pids',JSON.stringify({Pids}));
//   //  localStorage.setItem('PPids',JSON.stringify({PPids}));
//   // localStorage.setItem('Tags',JSON.stringify({Tags}));
//   localStorage.setItem('Img',JSON.stringify({Img}));

// ///////
// }

// document.addEventListener('DOMContentLoaded',()=>{
//   document.getElementById('btn').addEventListener('click',addProfile);
// });

// //////////////////////////////////////////////////////////////////////////
// let ids_test = JSON.parse(localStorage.getItem("Ids"));
// let ids_final = ids_test[Object.keys(ids_test)[0]];
// let names_test = JSON.parse(localStorage.getItem("Names"));
// let names_final = names_test[Object.keys(names_test)[0]];
// let pids_test = JSON.parse(localStorage.getItem("Pids"));
// let pids_final = pids_test[Object.keys(pids_test)[0]];
// // let ppids_test = JSON.parse(localStorage.getItem("PPids"));
// // let ppids_final = ppids_test[Object.keys(ppids_test)[0]];
// // let tags_test = JSON.parse(localStorage.getItem("Tags"));
// // let tags_final = tags_test[Object.keys(tags_test)[0]];
// let img_test = JSON.parse(localStorage.getItem("Img"));
// let img_final = img_test[Object.keys(img_test)[0]];
  
  


// var list = ids_final.map((id, index) => {
//     return {
//       id: id,
//       pid: pids_final[index],
//       ppid: ppids_final[index],
//       // tags: tags_final[index],
//       "Employee Name": names_final[index],
//       img: img_final[index]
//     }
// });
//   var test = ids_test[Object.keys(ids_test)[0]];
  
//   console.log(test);
//   console.log(names_test);
//   console.log(pids_test);
//   console.log(img_test);

//     // window.onload = function () {
// OrgChart.templates.ana.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
//       + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';

// OrgChart.templates.invisibleGroup.padding = [20, 0, 0, 0];


// var chart = new OrgChart(document.getElementById("orgchart"), {
//     template: "ana",
//     enableDragDrop: true,
//     assistantSeparation: 170,
//     align: OrgChart.ORIENTATION,
//     toolbar: {
//         fullScreen: true,
//         zoom: true,
//         fit: true,
//         expandAll: true
//     },
//     nodeBinding: {
//         field_0: "Employee Name",
//         field_1: "id",
//         img_0: "img"
//     },
//     nodes: list 
// // });
// });

// // / Select button to delete family tree by clearing the local storage.

//   var button = d3.select("#button");
//   button.on("click", runEnter);

//   function runEnter() {
//     console.log(localStorage.clear());
//   };
