/** @odoo-module **/

import { registerPatch } from '@mail/model/model_core';
import { attr, many, one } from '@mail/model/model_field';
import { BASE_VISUAL } from '@mail/models/chat_window_manager';

registerPatch({
	name: 'Composer',
	recordMethods: {
		/**
		 * Example of a new custom record method definition
		 */
		checkIsUser() {
			return true;
		},
	},
	fields: {
		/**
		 * Example of a field computing a value.
		 * composerWarning can be accessed in the XML Template to dynamically show or hide
		 * parts of the template. Here we call the custom defined method checkIsUser()
		 */
		composerWarning: attr({
			compute() {
				if (this.checkIsUser()) {
					return true;
				}
			},
		}),
		/**
		 * Example of a field overwrite. We get the data from this._super(),
		 * then do custom things and return the response, resource etc.
		 * this example console logs each placeholder twice.
		 */
		placeholder: {
			compute() {
				var res = this._super();
				console.log(res + res);
				return res;
			},
		},
	},
});
