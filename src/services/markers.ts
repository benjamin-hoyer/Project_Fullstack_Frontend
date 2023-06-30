import type { LatLng } from 'leaflet';

export interface MarkerSpec {
	id: string;
	categoryid: string;
	title: string;
	location: LatLng;
	img: string;
	popup: boolean;
}

export interface MarkerLayer {
	title: string;
	markerSpecs: MarkerSpec[];
}
