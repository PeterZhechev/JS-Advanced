function editElement(ref, match, replacer) {

    ref.textContent = ref.textContent.split(match).join(replacer);

}