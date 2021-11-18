function foldClick(classNm, tdClassNm){
	var className = '.' + classNm
  var obj =	document.querySelectorAll(className)
	var isShow = false
	Object.keys(obj).forEach(function(index){
		if (obj[index].style.display !== 'none') {
			obj[index].style.display = 'none'
			isShow = false
		} else {
			obj[index].style.display = 'table-row'
			isShow = true
		}
	})
	var rowLength = obj.length
	var tdClassName = '.' + tdClassNm
	var tdObj =	document.querySelector(tdClassName)
	if (tdObj.getAttribute('rowspan') > 1) {
		tdObj.setAttribute('rowspan',1)
	} else {
		tdObj.setAttribute('rowspan',rowLength+1)
	}

	var objPlus = tdObj.querySelector('.plus')
	var objMinus = tdObj.querySelector('.minus')
	
	if (isShow) {
		objPlus.style.display = 'none'
		objMinus.style.display = 'inline'
	} else {
		objMinus.style.display = 'none'
		objPlus.style.display = 'inline'
	}
}

function initTable(){
	var tr = document.querySelectorAll('tr');
	Object.keys(tr).forEach(function(index){
		if (tr[index].className.indexOf('tr_') == 0) {
			tr[index].style.display = 'none'
		}
	})
}

require(["gitbook"], function(gitbook){
	gitbook.events.bind('start', initTable)
});

require(["gitbook"], function(gitbook){
	gitbook.events.bind('page.change', initTable)
});
