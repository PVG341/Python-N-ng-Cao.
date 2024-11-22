from app import db

class User(db.Model):
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(80), unique=True, nullable=False)
    user_password = db.Column(db.String(20), nullable=False)
    user_role = db.Column(db.SmallInteger, nullable=False)
    address = db.Column(db.String(256))
    user_email = db.Column(db.String(256), unique=True,nullable=False)

    def __repr__(self):
        return f"<User {self.user_name}>"
    
    