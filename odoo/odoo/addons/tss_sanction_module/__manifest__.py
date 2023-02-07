# -*- coding: utf-8 -*-
{
    'name':
    "TSS: Sanction Module",
    'summary':
    """Add Sanction functionality.""",
    'description':
    """
        -   Country: Sanction Flag + Toggle Button
        -   Region: Sanction Flag + Toggle Button
        -   Sale Order: Filtering out sanctioned Partners
    """,
    'author':
    "Denis Orechov",
    'website':
    "https://github.com/ThatSafeSpace",
    'category':
    'Technical',
    'version':
    '0.1',
    'depends': ['base', 'sale'],
    'data': [
        'views/res_country_state_views.xml',
        'views/res_country_views.xml',
        'views/res_partner_views.xml',
        'views/sale_order_views.xml',
    ],
}
