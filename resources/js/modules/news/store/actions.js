/*
 * The actions that are available on the
 * news module.
 */

import {
	NEWS_ADD,
	NEWS_UPDATE,
	NEWS_REMOVE,
	NEWS_LIST,
} from './action-types';

export function add(payload) {
	return {
		type: NEWS_ADD,
		payload
	}
}

export function update(payload) {
	return {
		type: NEWS_UPDATE,
		payload
	}
}

export function remove(payload) {
	return {
		type: NEWS_REMOVE,
		payload
	}
}

export function list(payload) {
	return {
		type: NEWS_LIST,
		payload
	}
}