/** @odoo-module **/

import { useComponentToModel } from '@mail/component_hooks/use_component_to_model';
import { useRefToModel } from '@mail/component_hooks/use_ref_to_model';
import { registerMessagingComponent } from '@mail/utils/messaging_component';
import { Composer } from '@mail/components/composer/composer';
import { getMessagingComponent } from '@mail/utils/messaging_component';
const { Component, onWillRender, useEffect, useRef, useState, xml } = owl;

export class ComposerWarning extends Component {
	/**
	 * @override
	 */
	setup() {
		console.log('aaaaaa');
		super.setup();
		onWillRender(() => {
			this.initCalcData();
		});
	}

	//--------------------------------------------------------------------------
	// Public
	//--------------------------------------------------------------------------

	/**
	 * @returns {ComposerWarning}
	 */
	get composerWarning() {
		return this.props.record;
	}

	/**
	 * @returns {ComposerView}
	 */
	get composerView() {
		console.log('uuuu');
		return this.props.record;
	}
}

Object.assign(ComposerWarning, {
	props: { record: Object },
	components: { Composer: getMessagingComponent('Composer') },
	template: 'tss_modern_tree_view.ComposerWarning',
});

registerMessagingComponent(ComposerWarning);
