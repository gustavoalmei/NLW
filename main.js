const linkSocialMedia = {
  youtube:"",
  github:"gustavoalmei",
  facebook:"",
  instagram:"gustavoczz",
  twitter:"gustavoczz"
 }

function changeSocialMediaLinks(){
  for(let li of SocialMedia.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linkSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    bioUser.textContent = data.bio
    perfilGitHub.href = data.html_url
    avatarUser.src = data.avatar_url
    userLogin.textContent = data.login
  })
  // fetch vai conectar a url
  // then vai pegar os dados da url
  
}
getGitHubProfileInfos()