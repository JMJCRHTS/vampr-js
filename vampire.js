class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }
  /** Simple tree methods **/
  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }
  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }
  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let num = 0;
    let currVampire = this;
    
    
    while (currVampire.creator !== null) {
      currVampire = currVampire.creator;
      num++;
    }
    
    return num;
  }
  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let queue = [this];

    while (queue.length > 0) {
      let currVampire = queue.shift();
    
      if (currVampire.name === name) {
        return currVampire;
      }
    
      queue = queue.concat(currVampire.offspring);
    }
    
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let queue = [this];
    let count = -1;
    
    while (queue.length > 0) {
      let currVampire = queue.shift();
      count++;
      queue = queue.concat(currVampire.offspring);
    }
    
    return count;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let queue = [this];
    let result = [];
    
    while (queue.length > 0) {
      let currVampire = queue.shift();
    
      if (currVampire.yearConverted > 1980) {
        result.push(currVampire);
      }
    
      queue = queue.concat(currVampire.offspring);
    }
    
    return result;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
  }
}
module.exports = Vampire;
