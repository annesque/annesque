$(document).ready(function () {

    $.get("https://manager.piousbox.com/api/galleries/view/20180317.json", function (_data) {
      var data = _data.gallery
      var tmpl = $.templates("#curriculumTemplate")
      var html = tmpl.render(data)
      $("#curriculumContainer").html(html)
      console.log(data)
    })

})
