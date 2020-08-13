/*
 * The actions that are available on the
 * content module.
 */

import {
	PAGE_UPDATE,
	PAGE_GET,
} from './action-types';


export function update(payload) {
	return {
		type: PAGE_UPDATE,
		payload
	}
}

export function get(payload) {
	return {
		type: PAGE_GET,
		payload
	}
}