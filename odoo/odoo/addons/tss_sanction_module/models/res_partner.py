# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ResPartner(models.Model):
    _inherit = 'res.partner'

    partner_sanctioned = fields.Boolean(compute='_compute_partner_sanctioned',
                                        store=True)

    @api.depends('country_id.is_sanctioned', 'state_id.is_sanctioned')
    def _compute_partner_sanctioned(self):
        for rec in self:
            if rec.country_id.is_sanctioned or rec.state_id.is_sanctioned:
                self.partner_sanctioned = True
            else:
                self.partner_sanctioned = False
