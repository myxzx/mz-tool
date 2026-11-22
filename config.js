// Configuration de MZ TOOL
window.MZ_CONFIG = {
  clientId: "1573733338613817354",   // Client ID de ton application Discord
  guildId: "1574016464359399475",    // ID du serveur Discord (obligatoire pour se connecter)
  ownerId: "1273314813715419218",    // Accès « Fondation » par défaut
  roles: {                           // ID des rôles -> niveau d'accès (le plus haut gagne)
    illimite: "1574016556340609034", // Pass Illimité
    pro: "1574017095346421811",      // Pass Pro
    stagiaire: "1574017159246643220" // Pass Stagiaire
  },                                 // Sans rôle = accès Gratuit
  invite: "",                        // Lien d'invitation du serveur (ex. "https://discord.gg/xxxxx") : affiché sur la page de connexion
  allowedIds: []                     // Optionnel : réserver l'accès à certains comptes Discord
};
