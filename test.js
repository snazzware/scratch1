
class McKeeScratchUtils {

	constructor (runtime, extensionId) {
		// Extension stuff
		this.runtime = runtime;
		this.cl_icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjYsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyNiwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjMDBjMjhjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMjg2LjEyMDM3LDE1MC41NTc5NWMyMy4yNDA4NiwwIDQyLjA3ODksMTguODM5NDYgNDIuMDc4OSw0Mi4wNzg5YzAsMjMuMjM5NDQgLTE4LjgzODAzLDQyLjA3ODkgLTQyLjA3ODksNDIuMDc4OWgtOTIuMjQwNzRjLTIzLjI0MDg2LDAgLTQyLjA3ODksLTE4LjgzOTQ2IC00Mi4wNzg5LC00Mi4wNzg5YzAsLTIzLjIzOTQ0IDE4LjgzODAzLC00Mi4wNzg5IDQyLjA3ODksLTQyLjA3ODloNC4xODg4N2MxLjgxMTUzLC0yMS41NzA1NSAxOS44OTM1NywtMzguNTEyODkgNDEuOTMxNSwtMzguNTEyODljMjIuMDM3OTMsMCA0MC4xMTk5NywxNi45NDIzNCA0MS45MzE1LDM4LjUxMjg5eiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0yODkuMDg2NTUsMjEwLjM0MTE0djkuMDQ2NjdoLTI2LjkxNjYzaC05LjA0NjY3di05LjA0NjY3di01NC41MDMzOWg5LjA0NjY3djU0LjUwMzM5eiIgZmlsbD0iIzAwYzI4YyIvPjxwYXRoIGQ9Ik0yMjIuNDA5MjUsMjE5LjM4NzgxYy04LjM1MzIsMCAtMTYuMzY0MzEsLTMuMzE4MzQgLTIyLjI3MDksLTkuMjI0OTJjLTUuOTA2NjEsLTUuOTA2NTggLTkuMjI0OTEsLTEzLjkxNzY4IC05LjIyNDkxLC0yMi4yNzA4OWMwLC04LjM1MzIgMy4zMTgyOSwtMTYuMzY0MzEgOS4yMjQ5MSwtMjIuMjcwOWM1LjkwNjU5LC01LjkwNjYxIDEzLjkxNzcsLTkuMjI0OTEgMjIuMjcwOSwtOS4yMjQ5MWgyMS4xMDg5djguOTM0OThoLTIxLjEwODl2MC4xMDI1N2MtNS45NTYyOCwwIC0xMS42Njg2NCwyLjM2NjE2IC0xNS44ODAzNyw2LjU3Nzg5Yy00LjIxMTczLDQuMjExNzMgLTYuNTc3ODksOS45MjQwOCAtNi41Nzc4OSwxNS44ODAzN2MwLDUuOTU2MjggMi4zNjYxNiwxMS42Njg2NCA2LjU3Nzg5LDE1Ljg4MDM3YzQuMjExNzMsNC4yMTE3MyA5LjkyNDA4LDYuNTc3OTMgMTUuODgwMzcsNi41Nzc5M3YwLjEwMjUzaDIxLjEwODl2OC45MzQ5OHoiIGZpbGw9IiMwMGMyOGMiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzQwNDA4NDA4MzkyOjExMi42Nzc0MDQwODQwODQwMy0tPg==';
		this.cl_block = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzYuMzk4NTQiIGhlaWdodD0iMTIyLjY3MDY5IiB2aWV3Qm94PSIwLDAsMTc2LjM5ODU0LDEyMi42NzA2OSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1MS44MDA3MywtMTE4LjY2NDY2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGc+PHBhdGggZD0iTTI4Ni4xMjAzNywxNTcuMTc3NTVjMjMuMjQwODYsMCA0Mi4wNzg5LDE4LjgzOTQ2IDQyLjA3ODksNDIuMDc4OWMwLDIzLjIzOTQ0IC0xOC44MzgwMyw0Mi4wNzg5IC00Mi4wNzg5LDQyLjA3ODloLTkyLjI0MDc0Yy0yMy4yNDA4NiwwIC00Mi4wNzg5LC0xOC44Mzk0NiAtNDIuMDc4OSwtNDIuMDc4OWMwLC0yMy4yMzk0NCAxOC44MzgwMywtNDIuMDc4OSA0Mi4wNzg5LC00Mi4wNzg5aDQuMTg4ODdjMS44MTE1MywtMjEuNTcwNTUgMTkuODkzNTcsLTM4LjUxMjg5IDQxLjkzMTUsLTM4LjUxMjg5YzIyLjAzNzkzLDAgNDAuMTE5OTcsMTYuOTQyMzQgNDEuOTMxNSwzOC41MTI4OXoiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMjg5LjA4NjU1LDIxNi45NjA3NHY5LjA0NjY3aC0yNi45MTY2M2gtOS4wNDY2N3YtOS4wNDY2N3YtNTQuNTAzMzloOS4wNDY2N3Y1NC41MDMzOXoiIGZpbGw9IiMwMGMyOGMiLz48cGF0aCBkPSJNMjIyLjQwOTI1LDIyNi4wMDc0MWMtOC4zNTMyLDAgLTE2LjM2NDMxLC0zLjMxODM0IC0yMi4yNzA5LC05LjIyNDkyYy01LjkwNjYxLC01LjkwNjU4IC05LjIyNDkxLC0xMy45MTc2OCAtOS4yMjQ5MSwtMjIuMjcwODljMCwtOC4zNTMyIDMuMzE4MjksLTE2LjM2NDMxIDkuMjI0OTEsLTIyLjI3MDljNS45MDY1OSwtNS45MDY2MSAxMy45MTc3LC05LjIyNDkxIDIyLjI3MDksLTkuMjI0OTFoMjEuMTA4OXY4LjkzNDk4aC0yMS4xMDg5djAuMTAyNTdjLTUuOTU2MjgsMCAtMTEuNjY4NjQsMi4zNjYxNiAtMTUuODgwMzcsNi41Nzc4OWMtNC4yMTE3Myw0LjIxMTczIC02LjU3Nzg5LDkuOTI0MDggLTYuNTc3ODksMTUuODgwMzdjMCw1Ljk1NjI4IDIuMzY2MTYsMTEuNjY4NjQgNi41Nzc4OSwxNS44ODAzN2M0LjIxMTczLDQuMjExNzMgOS45MjQwOCw2LjU3NzkzIDE1Ljg4MDM3LDYuNTc3OTN2MC4xMDI1M2gyMS4xMDg5djguOTM0OTh6IiBmaWxsPSIjMDBjMjhjIi8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjg4LjE5OTI2OTk5OTk5OTk4OjYxLjMzNTM0NDk5OTk5OTk5LS0+';

		
	}

	getInfo () {
		return {
			"id": 'mckee',
			"name": 'McKeeScratchUtils',
			"blockIconURI": this.cl_block,
			"menuIconURI": this.cl_icon,
			"blocks": [
				
				{
					"opcode": 'getNumberValueByKey',
					"blockType": "reporter",
					"text": "Load value of [KEY] with default [DEFAULT]",
					"arguments": {
						"KEY": {
							"type": "string",
							"defaultValue": 'example',
						},
                        "DEFAULT": {
							"type": "number",
							"defaultValue": 0,
						},
					},
				},
                {
					"opcode": 'setNumberValueByKey',
					"blockType": "command",
					"text": "Save value [VALUE] to [KEY]",
					"arguments": {
						"KEY": {
							"type": "string",
							"defaultValue": 'example',
						},
                        "VALUE": {
							"type": "number",
							"defaultValue": 0,
						},
					},
				}
			]
		};
	};

    getNumberValueByKey({ KEY, DEFAULT}) {
		return window.localStorage.getItem('McKeeScratchUtils_Key_' + KEY);
	};

    setNumberValueByKey({ KEY, VALUE }) {
		return window.localStorage.setItem('McKeeScratchUtils_Key_' + KEY, VALUE);
	};
	
};

(function() {
	var extensionClass = McKeeScratchUtils;
	if (typeof window === "undefined" || !window.vm) {
		Scratch.extensions.register(new extensionClass());
		console.log("McKeeScratchUtils 0.1 loaded.");
	} else {
		var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
		var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
		window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
		console.log("McKeeScratchUtils 0.1 loaded. Detecting unsandboxed mode.");
	};
})()