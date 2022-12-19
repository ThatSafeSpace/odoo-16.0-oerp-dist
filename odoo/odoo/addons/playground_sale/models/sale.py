from odoo import fields, models


class SaleOrder(models.Model):
    _name = 'sale.order'
    _inherit = 'sale.order'
    _description = 'Quick Test field for Sale 1234'

    testfield = fields.Char(
        string="Source Document 1234",
        help="Reference of the document that generated this sales order request"
    )
