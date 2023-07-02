import { CharacterDataObject } from '../hard data/characterData';

/**
 * @param {CharacterDataObject} characterObject
 * @returns
 */
export function characterProfileMaker(characterObject) {
   let characterProfile = document.createElement('div');
   characterProfile.id = 'characterProfile';

   let hpAndAtk = document.createElement('div');

   let hp = document.createElement('div');
   let hpText = document.createElement('span');
   hpText.textContent = 'HEALTH\n';
   let hpNumber = document.createElement('span');
   hpNumber.textContent = characterObject.hp;

   let atk = document.createElement('div');
   let atkText = document.createElement('span');
   atkText.textContent = 'ATTACK\n';
   let atkNumber = document.createElement('span');
   atkNumber.textContent = characterObject.minAtk + ' - ' + characterObject.maxAtk;

   let specialAtk = document.createElement('div');
   let specialText = document.createElement('span');
   specialText.textContent = 'SPECIAL ATTACK\n';
   let specialString = document.createElement('span');
   specialString.textContent = characterObject.special;

   let weakness = document.createElement('div');
   let weaknessText = document.createElement('span');
   weaknessText.textContent = 'WEAKNESS\n';
   let weaknessString = document.createElement('span');
   weaknessString.textContent = characterObject.weakness;

   characterProfile.classList.add('smallText');
   characterProfile.style.color = '#DA8B14';
   characterProfile.style.fontSize = '12px';
   characterProfile.classList.add('characterProfile');
   hpAndAtk.classList.add('hpAndAtk');
   hp.classList.add('allCharacterData');
   atk.classList.add('allCharacterData');
   specialAtk.classList.add('allCharacterData');
   weakness.classList.add('allCharacterData');

   hpNumber.classList.add('bigText');
   hpNumber.style.fontSize = '18px';
   hpNumber.style.color = 'white';

   atkNumber.classList.add('bigText');
   atkNumber.style.fontSize = '18px';
   atkNumber.style.color = 'white';

   specialString.classList.add('bigText');
   specialString.style.fontSize = '18px';
   specialString.style.color = 'white';

   weaknessString.classList.add('bigText');
   weaknessString.style.fontSize = '18px';
   weaknessString.style.color = 'white';

   hp.appendChild(hpText);
   hp.appendChild(hpNumber);

   atk.appendChild(atkText);
   atk.appendChild(atkNumber);

   hpAndAtk.appendChild(hp);
   hpAndAtk.appendChild(atk);

   specialAtk.appendChild(specialText);
   specialAtk.appendChild(specialString);

   weakness.appendChild(weaknessText);
   weakness.appendChild(weaknessString);

   characterProfile.appendChild(hpAndAtk);
   characterProfile.appendChild(specialAtk);
   characterProfile.appendChild(weakness);

   return characterProfile;
}
