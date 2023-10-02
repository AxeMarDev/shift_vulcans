# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_10_01_200619) do
  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "adminname"
    t.string "adminpassword"
  end

  create_table "employee_infos", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.boolean "clockin"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "attempts"
    t.integer "companies_id", null: false
    t.index ["companies_id"], name: "index_employee_infos_on_companies_id"
  end

  add_foreign_key "employee_infos", "companies", column: "companies_id"
end