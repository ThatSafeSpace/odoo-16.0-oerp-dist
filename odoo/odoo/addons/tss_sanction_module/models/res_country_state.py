# -*- coding: utf-8 -*-

from odoo import models, fields


class ResCountryState(models.Model):
    _inherit = 'res.country.state'

    is_sanctioned = fields.Boolean('Sanctioned')

    def action_sanction(self):
        for rec in self:
            rec.is_sanctioned = not rec.is_sanctioned
