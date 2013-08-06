var dependencyTree = 
{
	"date-parse": { deps: [] },
	"jquery.clientRect": { deps: [] },
	"jquery.contentSize": { deps: ["jquery.clientRect"] },
	"jquery.css": { deps: ["jquery.delimitedString"] },
	"jquery.customEvent": { deps: [] },
	"jquery.delimitedString": { deps: [] },
	"jquery.disableEvent": { deps: [] },
	"jquery.hostIframe": { deps: [] },
	"jquery.hoverDelay": { deps: [] },
	"jquery.htmlEncode": { deps: [] },
	"jquery.imageSize": { deps: [] },
	"jquery.isVisibleKeyCode": { deps: [] },
	"jquery.menu": { deps: [] },
	"jquery.modalDialog": { deps: ["jquery.queryString","jquery.postMessage","jquery.customEvent","jquery.clientRect","jquery.hostIframe","jquery.proxyAll"] },
	"jquery.modalDialogContent": { deps: ["jquery.queryString", "jquery.contentSize", "jquery.customEvent"] },
	"jquery.msAjax": { deps: ["date-parse"] },
	"jquery.ns": { deps: [] },
	"jquery.partialLoad": { deps: [] },
	"jquery.postMessage": { deps: [] },
	"jquery.proxyAll": { deps: [] },
	"jquery.queryString": { deps: ["jquery.delimitedString"] },
	"jquery.uncomment": { deps: [] },
	"jquery.url": { deps: ["jquery.queryString"] }
};