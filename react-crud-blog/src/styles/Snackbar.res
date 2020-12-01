let style = j`
.snackbar {
  display: inline-block;
  position: fixed;
  background: #323232;
  color: #f1f1f1;
  min-height: 50px;
  min-width: 290px;
  padding: 16px 24px 12px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  bottom: 1rem;
  left: 1rem;
  font-size: 90%;
  transition: visibility 0.3s, transform 0.3s;
  transform: translateY(100px);
  visibility: hidden;
  will-change: transform;
  z-index: 1;
}

.snackbar--visible {
  visibility: visible;
  transform: none;
}
`;