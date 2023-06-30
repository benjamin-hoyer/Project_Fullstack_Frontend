import type { Hike } from './types.ts';
import type { MarkerLayer, MarkerSpec } from './markers.ts';
import { LatLng } from 'leaflet';

export function getMarkerLayer(hikes: Hike[]): MarkerLayer {
	const markerSpecs = Array<MarkerSpec>();
	hikes.forEach((hike) => {
		markerSpecs.push({
			id: hike._id,
			title: hike.name,
			location: new LatLng(hike.lat, hike.long),
			img: hike.img[0],
			popup: true,
			categoryid: hike.categoryid
		});
	});
	return { title: 'Start Points', markerSpecs: markerSpecs };
}

export function getMarkerLayerEnd(hikes: Hike[]): MarkerLayer {
	const markerSpecs = Array<MarkerSpec>();
	hikes.forEach((hike) => {
		markerSpecs.push({
			id: hike._id,
			title: hike.name,
			location: new LatLng(hike.latend, hike.longend),
			img: hike.img[0],
			popup: true,
			categoryid: hike.categoryid
		});
	});
	return { title: 'End Points', markerSpecs: markerSpecs };
}
