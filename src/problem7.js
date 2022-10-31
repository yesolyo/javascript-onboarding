function problem7(user, friends, visitors) {
  var answer;
  answer = [];
  var user_friends = [];
  var friends_number = [];
  var visitors_number = [];
  var n = 0;

  //friends에서 user인 mrko를 찾는다
  for (let i = 0; i < friends.length; i++) {
    if (user == friends[i][0]) {
      //user친구 아이디B를 찾는다
      user_friends[n] = friends[i][1];
      n += 1;
    } else if (user == friends[i][1]) {
      //user친구 아이디A를 찾는다
      user_friends[n] = friends[i][0];
      n += 1;
    } else {
      continue;
    }
  }

  //user친구의 친구아이디를 찾는다
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < user_friends.length; j++) {
      if (user_friends[j] == friends[i][0] && user != friends[i][1]) {
        //친구 아이디에 각 10점을 부여한다
        friends_number.push([friends[i][1], 10]);
      } else if (user_friends[j] == friends[i][1] && user != friends[i][0]) {
        friends_number.push([friends[i][0], 10]);
      } else {
        continue;
      }
    }
  }

  //user친구의 친구아이디에서 중복 아이디는 점수를 더한다.
  for (let i = 0; i < friends_number.length; i++) {
    for (let j = i + 1; j < friends_number.length; j++) {
      if (friends_number[i][0] == friends_number[j][0]) {
        friends_number[i][1] += friends_number[j][1];
        friends_number.splice(j, 1);
        j--;
      }
    }
  }

  return answer;
}

module.exports = problem7;
