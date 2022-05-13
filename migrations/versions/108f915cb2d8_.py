"""empty message

Revision ID: 108f915cb2d8
Revises: aa323d7229c9
Create Date: 2022-05-11 07:45:14.705188

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '108f915cb2d8'
down_revision = 'aa323d7229c9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'is_active')
    op.drop_column('user', 'password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###