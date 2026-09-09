import { change, date } from 'common/changelog';
import { apolex, emallson } from 'CONTRIBUTORS';

// prettier-ignore
export default [
  change(date(2026, 9, 9), 'Corrected the static cooldowns and charges in the spellbook against the 12.0.7 spell data, including Avenging Wrath, Ardent Defender, Guardian of Ancient Kings, Hammer of Justice and Divine Steed, and applied the Quickened Invocation, Empyrean Authority, Fist of Justice, Divine Spurs and Unbreakable Spirit modifiers that were missing.', apolex),
  change(date(2026, 9, 9), "Fixed Hammer of Wrath and Judgment using spell ids Protection never casts, which left both out of the spellbook and out of the rotation priority.", apolex),
  change(date(2026, 9, 9), 'Fixed the per-cast Shield of the Righteous overcap amount, which was inverted and so ranked the worst casts as the best.', apolex),
  change(date(2026, 9, 9), 'Removed the Light of the Protector, First Avenger and Sanctified Wrath modules, none of which can record anything in Midnight.', apolex),
  change(date(2026, 7, 30), 'Re-enabled the analyzer for Midnight: removed references to talents that no longer exist (Eye of Tyr, Moment of Glory, Holy Shield, Resolute Defender, Repentance, Bastion of Light, Inmost Light, Inspiring Vanguard) and fixed the Holy Armaments rename.', apolex),
  change(date(2025, 4, 27), 'More rotational work for Templar', emallson),
  change(date(2025, 4, 26), 'Added rotational analysis for Templar', emallson),
  change(date(2025, 4, 11), 'Initial updates for The War Within.', emallson),
];
