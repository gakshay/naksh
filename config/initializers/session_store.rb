# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_naksh_session',
  :secret      => 'ebe45a7f96a2d40c2c7e0de6f877a222c5b3d1fabf7c301f0a5f83899991a7cf5dd2111238927d5af7636cba04d6b1c66e9894aab6f1528e6bf33cd54444df13'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
