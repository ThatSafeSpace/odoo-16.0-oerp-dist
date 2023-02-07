# -*- coding: utf-8 -*-

from odoo import models, fields


class ResCountry(models.Model):
    _inherit = 'res.country'

    is_sanctioned = fields.Boolean('Sanctioned')

    def action_sanction(self):
        for rec in self:
            rec.is_sanctioned = not rec.is_sanctioned
