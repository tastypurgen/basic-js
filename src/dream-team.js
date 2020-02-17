module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let team = [];
	members.forEach((member) => {
		if (typeof member == 'string') {
			const parsedMember = member.replace(/ /g, '');
			team.push(parsedMember[0].toUpperCase());
		}
	});
	return team.sort().join('');
};
