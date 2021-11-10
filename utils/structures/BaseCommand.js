module.exports = class BaseCommand {
    constructor (name, category, help) {
      this.name = name;
      this.category = category;
      this.help = help;
    }
}