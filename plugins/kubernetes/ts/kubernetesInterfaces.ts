module Kubernetes {
	
	export interface ObjectMap {
		[uid:string]: any;		
	}
	
	export interface WatcherService {
		hasWebSocket: boolean;
		addCustomizer: (type: string, customizer: (obj:any) => void) => void;
		getObjects: (type: string) => Array<any>;
		getObjectMap: (type: string) => ObjectMap;
	}
	
}