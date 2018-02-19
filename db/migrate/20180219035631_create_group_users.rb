class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :group, foregign_key: true, idex: true
      t.references :user, foregign_key: true, index: true
      t.timestamps
    end
  end
end
